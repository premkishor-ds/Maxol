import classNames from "classnames";
import React, {
  useReducer,
  KeyboardEvent,
  useRef,
  useEffect,
  useState,
  useMemo,
  FocusEvent,
  Children,
} from "react";
import DropdownSection, { DropdownSectionProps } from "./DropdownSection";
import recursivelyMapChildren from "./utils/recursivelyMapChildren";
import { v4 as uuid } from "uuid";
import { useSearchActions, useSearchState } from "@yext/search-headless-react";
import {
  AnswerExperienceConfig, googleApiKey,
} from "../../sites-global/global";
import { Routes, Route, useParams, useNavigate, createSearchParams } from 'react-router-dom';
import errorbox from "../../images/error-status-icon.png";
import FilterSearch from "./FilterSearch";

export interface InputDropdownCssClasses {
  inputDropdownContainer?: string;
  inputDropdownContainer___active?: string;
  dropdownContainer?: string;
  filterSearchContainer?:string;
  inputElement?: string;
  inputContainer?: string;
  divider?: string;
  logoContainer?: string;
  searchButtonContainer?: string;
}

interface Props {
  inputValue?: string;
  placeholder?: string;
  screenReaderInstructions: string;
  screenReaderText: string;
  onlyAllowDropdownOptionSubmissions?: boolean;
  forceHideDropdown?: boolean;
  onSubmit?: (value: string) => void;
  renderSearchButton?: () => JSX.Element | null;
  renderLogo?: () => JSX.Element | null;
  onInputChange: (value: string) => void;
  onInputFocus: (value: string) => void;
  onDropdownLeave?: (value: string) => void;
  cssClasses?: InputDropdownCssClasses;
  handleSetUserShareLocation: (value: string, userShareStatus: boolean) => void;
  handleInputValue: () => void;
}

interface State {
  focusedSectionIndex?: number;
  dropdownHidden: boolean;
}

type Action =
  | { type: "HideSections" }
  | { type: "ShowSections" }
  | { type: "FocusSection"; newIndex?: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "HideSections":
      // alert('HideSections');
      return { focusedSectionIndex: undefined, dropdownHidden: true };
    case "ShowSections":
      // alert('ShowSections');
      return { focusedSectionIndex: undefined, dropdownHidden: false };
    case "FocusSection":
      return { focusedSectionIndex: action.newIndex, dropdownHidden: false };
  }
}

/**
 * A controlled input component with an attached dropdown.
 */

export default function InputDropdown({
  inputValue = "",
  placeholder,
  setPostalLoading,
  screenReaderInstructions,
  screenReaderText,
  onlyAllowDropdownOptionSubmissions,
  forceHideDropdown,
  children,
  onSubmit = () => {},
  renderSearchButton = () => null,
  renderLogo = () => null,
  onInputChange,
  onInputFocus,
  onDropdownLeave,
  cssClasses = {},
  handleInputValue,
  params,
  displaymsg,
  setDisplaymsg,
  setSearchInputValue,
  setAllowResult,
  startgeocode,
  setStartGeoCode,
  getCoordinates,
  setCheckAllowed,
  updateParam,
  errorstatus,
  setErrorStatus
}: React.PropsWithChildren<Props>): JSX.Element | null {
  const initialSearchvalue: any = "";
  const [{ focusedSectionIndex, dropdownHidden }, dispatch] = useReducer(
    reducer,
    {
      focusedSectionIndex: undefined,
      dropdownHidden: true,
    }
  );



  const shouldDisplayDropdown = !dropdownHidden && !forceHideDropdown;

  const [focusedOptionId, setFocusedOptionId] = useState<string | undefined>(
    undefined
  );
  type FilterHandle = React.ElementRef<typeof FilterSearch>;
  const filterRef = useRef<FilterHandle>(null);
  const [latestUserInput, setLatestUserInput] = useState(inputValue);
  const [firstinput,setFirstInput]=useState('');
  const [childrenKey, setChildrenKey] = useState(0);
  const [norecord, setNorecord] = useState(true);
  const [keyUpStatus, setKeyUpStatus] = useState(true);
  const[query,setQuery]=useState("");
  const screenReaderInstructionsId = useMemo(() => uuid(), []);
  const loading = useSearchState((s) => s.searchStatus.isLoading);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputDropdownRef = useRef<HTMLDivElement>(null);
  const locationResults = useSearchState((s) => s.vertical.results) || [];
  const allResultsForVertical = useSearchState(state => state.vertical?.noResults?.allResultsForVertical.results?.length) ||0;
  const searchActions = useSearchActions();
  const staticfilter=useSearchState((s) => s.filters.static?.length)||0;
  let numSections = 0;
  const childrenWithProps = recursivelyMapChildren(children, (child) => {
    if (!(React.isValidElement(child) && child.type === DropdownSection)) {
      return child;
    }
    const currentSectionIndex = numSections;
    numSections++;

    const childProps = child.props as DropdownSectionProps;
    const modifiedOptions = childProps.options.map((option) => {
      const modifiedOnSelect = () => {
        
        searchActions.setStaticFilters([]);
         setSearchInputValue("");
         setLatestUserInput(option.value);
         updateParam(option.value);
        // searchActions.setQuery(option.value);
        // searchActions.setUserLocation(params);
        dispatch({ type: "HideSections" });
        option.onSelect?.();
        searchActions.setStaticFilters([]);
        getCoordinates(option.value,params)
        setAllowResult(false);
      };
      return { ...option, onSelect: modifiedOnSelect };
    });

    const modifiedOnFocusChange = (value: string, focusedOptionId: string) => {
      setLatestUserInput(value);
      child.props.onFocusChange?.(value, focusedOptionId);
      setFocusedOptionId(focusedOptionId);
    };

    if (focusedSectionIndex === currentSectionIndex) {
      return React.cloneElement(child, {
        onLeaveSectionFocus,
        options: modifiedOptions,
        isFocused: true,
        key: `${currentSectionIndex}-${childrenKey}`,
        onFocusChange: modifiedOnFocusChange,
      });
    } else {
      return React.cloneElement(child, {
        onLeaveSectionFocus,
        options: modifiedOptions,
        isFocused: false,
        key: `${currentSectionIndex}-${childrenKey}`,
      });
    }
  });

  /**
   * Handles changing which section should become focused when focus leaves the currently-focused section.
   * @param pastSectionEnd Whether the section focus left from the end or the beginning of the section.
   */
  function onLeaveSectionFocus(pastSectionEnd: boolean) {
    if (focusedSectionIndex === undefined && pastSectionEnd) {
      dispatch({ type: "FocusSection", newIndex: 0 });
    } else if (focusedSectionIndex !== undefined) {
      let newSectionIndex: number | undefined = pastSectionEnd
        ? focusedSectionIndex + 1
        : focusedSectionIndex - 1;
      if (newSectionIndex < 0) {
        newSectionIndex = undefined;
        onInputChange(latestUserInput);
        onDropdownLeave?.(latestUserInput);
      } else if (newSectionIndex > numSections - 1) {
        newSectionIndex = numSections - 1;
      }
      dispatch({ type: "FocusSection", newIndex: newSectionIndex });
    }
  }

  function handleDocumentClick(evt: MouseEvent) {
    const target = evt.target as HTMLElement;
    if (
      !(
        target.isSameNode(inputRef.current) ||
        dropdownRef.current?.contains(target)
      )
    ) {
      dispatch({ type: "HideSections" });
    }
  }

  function handleDocumentKeydown(evt: globalThis.KeyboardEvent) {
    setAllowResult(false);
    if (["ArrowDown", "ArrowUp"].includes(evt.key)) {
      evt.preventDefault();
    }

    if (evt.key === "Escape") {
      dispatch({ type: "HideSections" });
    } else if (
      evt.key === "ArrowDown" &&
      numSections > 0 &&
      focusedSectionIndex === undefined
    ) {
      dispatch({ type: "FocusSection", newIndex: 0 });
    }
  }
    

  function handleDocumentKeyUp(evt: KeyboardEvent<HTMLInputElement>) {
    if (
      evt.key == "Enter" &&
      latestUserInput != "" &&
      locationResults.length == 0
    ) {
      setErrorStatus(false);
      updateParam(inputValue);
      setNorecord(true);
      setStartGeoCode(true);
      dispatch({ type: "HideSections" });
      getCoordinates(latestUserInput);
      
    }
    if (
      evt.key == "Enter" &&
      latestUserInput != "" &&
      locationResults.length > 0
    ) {
      setErrorStatus(false);
      updateParam(inputValue);
      setStartGeoCode(true);
      dispatch({ type: "HideSections" });
      getCoordinates(latestUserInput);
    }
    if (
      evt.key == "Enter" &&
      latestUserInput == ""
    ) {
          setErrorStatus(true);
    }
    

    handleInputValue();
    if (evt.key === "Backspace" || evt.key === "x" || evt.key === "Delete") {
      if (inputValue == "") {
        setCheckAllowed(false);
        setNorecord(false);
        setDisplaymsg(false);
        setLatestUserInput("");
        if (keyUpStatus&&!loading) {
          searchActions.setVertical("");
          searchActions.setQuery("");
          searchActions.setOffset(0);
          searchActions.setVerticalLimit(AnswerExperienceConfig.limit);
          searchActions.executeVerticalQuery();
          setKeyUpStatus(false);
        }
      }
    }
    
  
    if (document.querySelector(".z-10") != null) {
      document.querySelector(".z-10")?.classList.remove("hidden");
    }
  }
  useEffect(()=>{

  const urlParams = new URLSearchParams(window.location.search);
  const currentValue:any = urlParams.get('myParam');
    if (latestUserInput !== currentValue) {
      if(currentValue!=="" && currentValue!==null){
      setLatestUserInput(currentValue);
      getCoordinates(currentValue);
      }
      // Do something with the updated value, such as update a form field or make an API call
    }

  },[]);


  useEffect(()=>{
    if (inputValue != "") {
      setKeyUpStatus(true);
      setErrorStatus(false);
    }
    if (!keyUpStatus) {
      searchActions.setVertical("locations");
    }
 
  },[inputValue])

  useEffect(() => {
    if (shouldDisplayDropdown) {
      document.addEventListener("click", handleDocumentClick);
      document.addEventListener("keydown", handleDocumentKeydown);
      return () => {
        document.removeEventListener("click", handleDocumentClick);
        document.removeEventListener("keydown", handleDocumentKeydown);
      };
    }

    if (latestUserInput === "") {
      setNorecord(false);
      setDisplaymsg(false);
    } else if (!loading && locationResults.length == 0) {
      setDisplaymsg(true);
      
    }
  }, );
  function handleInputElementKeydown(evt: KeyboardEvent<HTMLInputElement>) {
    if (["ArrowDown", "ArrowUp"].includes(evt.key)) {
      setLatestUserInput(inputValue)
      evt.preventDefault();
    }

    if (
      evt.key === "Enter" &&
      focusedSectionIndex === undefined &&
      !onlyAllowDropdownOptionSubmissions
    ) {
     
      setLatestUserInput(inputValue);
      onSubmit(inputValue);
    }
    if(staticfilter > 0){
      // setLatestUserInput(inputValue);
      searchActions.setStaticFilters([]);
    }
    
  }

  function handleBlur(evt: FocusEvent<HTMLDivElement>) {
    if (
      !evt.relatedTarget ||
      !(evt.relatedTarget instanceof HTMLElement) ||
      !inputDropdownRef.current
    ) {
      return;
    }
    if (!inputDropdownRef.current.contains(evt.relatedTarget)) {
      dispatch({ type: "HideSections" });
    }
  }

  const inputDropdownContainerCssClasses = classNames(
    cssClasses.inputDropdownContainer,
    {
      [cssClasses.inputDropdownContainer___active ?? ""]: shouldDisplayDropdown,
    }
  );



  return (
    <div
      className={inputDropdownContainerCssClasses}
      ref={inputDropdownRef}
      onBlur={handleBlur}
    >
      <div className={cssClasses?.inputContainer}>
        <div className={cssClasses.logoContainer}>{renderLogo()}</div>
        <input
          className={cssClasses.inputElement}
          placeholder={placeholder}
          onChange={(evt) => {
            const value = evt.target.value;
            setNorecord(false);
            setDisplaymsg(false);
            setPostalLoading(false);
            setLatestUserInput(value);
            onInputChange(value);
            onInputFocus(value);
            setChildrenKey(childrenKey + 1);
            dispatch({ type: "ShowSections" });
          }}
          onClick={() => {
            onInputFocus(inputValue);
            setChildrenKey(childrenKey + 1);
            dispatch({ type: "ShowSections" });
          }}
          onKeyDown={handleInputElementKeydown}
          onKeyUp={handleDocumentKeyUp}
          value={inputValue!==""?inputValue:latestUserInput}
          ref={inputRef}
          aria-describedby={screenReaderInstructionsId}
          aria-activedescendant={focusedOptionId}
        />
        {errorstatus &&
        <span className="Error-msg">
          <img src={errorbox}/>
           Please fill out this field</span>}
 
        <div className={cssClasses.searchButtonContainer}>
          {renderSearchButton()}
        </div>
      </div>
      {(locationResults.length == 0 && allResultsForVertical>0) || (locationResults.length == 0 &&displaymsg && !loading) ? (
        <h4 className="font-bold">
          Sorry we do not have any location in your area here you can check
          other stores
        </h4>
      ) : (
        ""
      )}

      {shouldDisplayDropdown && Children.count(children) !== 0 && (
        <>
          <div className={cssClasses.divider}></div>
          <div className={cssClasses.dropdownContainer} ref={dropdownRef}>
            {childrenWithProps}
          </div>
        </>
      )}
    </div>
  );
}

