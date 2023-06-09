export const localLogo = "../images/logo.png";
export const liveHomePage = "https://www.maxol.co.uk/";
export const stagingBaseurl = "https://store.maxol.co.uk/";
export const maxolLogo = localLogo;
export const favicon = "https://stations.maxol.ie/permanent-b0b701/assets/images/favicons/primary/favicon.12f14dd7.ico";
export const cookieText = "By browsing maxol, you agree to ";
export const cookiesUrl = "https://www.maxol.co.uk/corporate/cookies"; 
export const experienceKey = "maxol-answer";
export const apiKey = "eae7f7b869898be78931009e9fe3acd6";
export const verticalKey = "locations";
export const googleApiKey = "AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18";
export const regionNames = new Intl.DisplayNames(['en'], { type: 'region'});
export const metaBots = "index, follow";

// Analytics 
export const AnalyticsEnableDebugging  = true;
export const AnalyticsEnableTrackingCookie  = true;
export const conversionDetailsDirection = {
  cid: "",
  cv: "1",
};
export const conversionDetailsPhone = {
  cid: "",
  cv: "2",
};
// 
export const center_latitude=51.5095146286;
export const center_longitude=-0.1244828354;
/**
 * const AnswerExperienceConfig: {
 *   limit: number;
 *   locale: string;
 *   experienceVersion: string;
 *   locationRadius: number;
 *   sessionTrackingEnabled: boolean;
 *   endpoints: {
 *       universalSearch: string;
 *       verticalSearch: string;
 *       questionSubmission: string;
 *       universalAutocomplete: string;
 *       verticalAutocomplete: string;
 *       filterSearch: string;
 *   };
 * }
 */
export const AnswerExperienceConfig = {
  limit:10,
  locale: "en",
  experienceVersion: "PRODUCTION",
  locationRadius: 1609340,
  sessionTrackingEnabled: true,
  endpoints: {
    universalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
    verticalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
    questionSubmission: "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
    universalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
    verticalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
    filterSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch",

  }
}

/* All Svgs */
export const Cross = `<svg xmlns="http://www.w3.org/2000/svg" width="20.953" height="20.953" viewBox="0 0 20.953 20.953"><path id="Icon_ionic-md-close" data-name="Icon ionic-md-close" d="M28.477,9.619l-2.1-2.1L18,15.9,9.619,7.523l-2.1,2.1L15.9,18,7.523,26.381l2.1,2.1L18,20.1l8.381,8.381,2.1-2.1L20.1,18Z" transform="translate(-7.523 -7.523)" fill="#B1B1B1"></path></svg>`
export const breadcrumbhome = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20.002" viewBox="0 0 20 20.002">
<path d="M877,4760h5a1,1,0,0,0,1-1v-8.59l.293.3a1,1,0,1,0,1.414-1.42l-9-9a1,1,0,0,0-1.414,0l-9,9a1,1,0,0,0,1.414,1.42l.293-.3V4759a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1v-5h2v5A1,1,0,0,0,877,4760Zm4-2h-3v-5a1,1,0,0,0-1-1h-4a1,1,0,0,0-1,1v5h-3v-9.59l6-6,6,6Z" transform="translate(-865 -4739.998)" fill="#d00" fill-rule="evenodd"/>
</svg>`;
export const UseMylocationsvg = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.90625 12.9062C8.71875 13.3438 8.25 13.5938 7.78125 13.5C7.3125 13.4062 6.96875 13 6.96875 12.5V7H1.46875C1 7 0.59375 6.6875 0.5 6.21875C0.40625 5.75 0.65625 5.28125 1.09375 5.09375L12.0938 0.59375C12.4688 0.4375 12.9062 0.53125 13.1875 0.8125C13.4688 1.09375 13.5625 1.53125 13.4062 1.90625L8.90625 12.9062Z" fill="#333333"/>
</svg>
`;
export const mobilesvg = `<svg xmlns="http://www.w3.org/2000/svg" width="14.35" height="22.96" viewBox="0 0 14.35 22.96">
<path  d="M12.2,0H2.152A2.153,2.153,0,0,0,0,2.152V20.807A2.153,2.153,0,0,0,2.152,22.96H12.2a2.153,2.153,0,0,0,2.152-2.153V2.152A2.153,2.153,0,0,0,12.2,0ZM7.175,21.525A1.435,1.435,0,1,1,8.61,20.09,1.433,1.433,0,0,1,7.175,21.525ZM12.2,16.682a.54.54,0,0,1-.538.538H2.691a.54.54,0,0,1-.538-.538V2.691a.54.54,0,0,1,.538-.538h8.969a.54.54,0,0,1,.538.538Z" fill="#eb0000" />
    </svg>`;
export const Addresssvg = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 14.353 19.138">
<path d="M6.439,18.752C1.008,10.878,0,10.07,0,7.177a7.177,7.177,0,0,1,14.353,0c0,2.894-1.008,3.7-6.439,11.575A.9.9,0,0,1,6.439,18.752Zm.738-8.585a2.99,2.99,0,1,0-2.99-2.99A2.99,2.99,0,0,0,7.177,10.167Z" fill="#eb0000" />
</svg>`;
export const View_Store = `<svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.403"
              height="14"
              viewBox="0 0 22.403 14"
              >
              <g transform="translate(-15.975 -106)">
                <path
                  d="M27.176,120a10.337,10.337,0,0,1-4.387-1.05,16.655,16.655,0,0,1-3.481-2.249,21.287,21.287,0,0,1-3.183-3.253.742.742,0,0,1,0-.9,21.288,21.288,0,0,1,3.183-3.253,16.655,16.655,0,0,1,3.481-2.249A10.337,10.337,0,0,1,27.176,106a10.337,10.337,0,0,1,4.387,1.05,16.655,16.655,0,0,1,3.481,2.249,21.023,21.023,0,0,1,3.183,3.253.742.742,0,0,1,0,.9,21.287,21.287,0,0,1-3.183,3.253,16.655,16.655,0,0,1-3.481,2.249A10.337,10.337,0,0,1,27.176,120Zm-9.492-7c1.171,1.386,5.04,5.507,9.492,5.507S35.5,114.386,36.669,113c-1.171-1.386-5.04-5.507-9.492-5.507S18.856,111.614,17.684,113Z"
                  transform="translate(0 0)"
                  fill="#"
                />
                <path
                  d="M187.36,190.72a3.36,3.36,0,1,1,3.36-3.36A3.364,3.364,0,0,1,187.36,190.72Zm0-5.227a1.867,1.867,0,1,0,1.867,1.867A1.866,1.866,0,0,0,187.36,185.493Z"
                  transform="translate(-160.184 -74.36)"
                  fill=""
                />
              </g></svg>`;

export const Openclose = `<svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer ml-1" width="9.585" height="4.793" viewBox="0 0 9.585 4.793">
<path d="M9,13.5l4.793,4.793L18.585,13.5Z" transform="translate(-9 -13.5)" />
</svg>`;

export const maxol_marker = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" viewBox="0 0 32.396 43.195">
<g transform="translate(-1106.871 -1030.805)">
  <path d="M14.534,42.324C2.275,24.553,0,22.729,0,16.2a16.2,16.2,0,0,1,32.4,0c0,6.531-2.275,8.355-14.534,26.126a2.026,2.026,0,0,1-3.329,0ZM16.2,22.947A6.749,6.749,0,1,0,9.449,16.2,6.749,6.749,0,0,0,16.2,22.947Z" transform="translate(1106.871 1030.805)" fill="#eb0000" />
  <g transform="translate(154 186.171)">
    <path id="Path_51" data-name="Path 51" d="M12,0A12,12,0,1,1,0,12,12,12,0,0,1,12,0Z" transform="translate(957 849.829)" fill="#fff" />
    <text id="M" transform="translate(961.267 867.509)" fill="#eb0000" font-size="16" font-family="SofiaProLight, Sofia Pro"><tspan x="0" y="0">M</tspan></text>
  </g>
</g>
</svg>`;

export const Directionsvg = `<svg
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
viewBox="0 0 24 24"
>
<path d="M0,0H24V24H0Z" fill="none" />
<path
  d="M22.43,10.59,13.42,1.58a2.051,2.051,0,0,0-2.83,0l-9,9a1.992,1.992,0,0,0,0,2.82l9,9a2,2,0,0,0,2.82,0l8.99-8.99A1.992,1.992,0,0,0,22.43,10.59ZM12.01,20.99l-9-9,9-9,9,9ZM8,11v4h2V12h4v2.5L17.5,11,14,7.5V10H9A1,1,0,0,0,8,11Z"
  fill=""
/>
</svg>`;

export const logo = `<a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="164" height="64" viewBox="0 0 164 64" fill="none">
<path d="M164 0H0V64H164V0Z" fill="#AD1E1F"/>
<path d="M54.3443 23.1759L54.256 23H52.4947L43.6335 40.6751L45.7262 40.6718L48.5731 35.0451H58.1776L61.0246 40.6718L63.1173 40.6751L54.3443 23.1759ZM57.3613 33.4375H49.3905L53.3765 25.4367L57.3613 33.4375Z" fill="white"/>
<path d="M39.3566 23.0024H37.181L30.4016 38.0165L23.6222 23.0024H21.4478L19.0837 40.6753H20.954L22.9235 25.879L29.5754 40.6775L30.4016 40.6753L31.2289 40.6775L37.8797 25.879L39.8503 40.6753H41.7196L39.3566 23.0024Z" fill="white"/>
<path d="M81.2887 23.0902L81.243 23H79.4816L70.6193 40.6751L72.712 40.6718L75.5589 35.0451H85.1635L88.0104 40.6718L90.1031 40.6751L81.2887 23.0902ZM84.3482 33.4375H76.3775L80.3634 25.4367L84.3482 33.4375Z" fill="white"/>
<path d="M59.806 23.0022V24.6098H65.9849V40.6751H67.7451V24.6098H73.924V23.0022H59.806Z" fill="white"/>
<path d="M93.7783 39.0675V23.0022H92.0181V40.6751H104.519V39.0675H93.7783Z" fill="white"/>
<path d="M143.155 23.0022V38.0954L129.834 23L127.83 23.0033V40.6751H129.591V25.5808L142.853 40.6168L142.901 40.6718L144.916 40.6751V23.0022H143.155Z" fill="white"/>
<path d="M117.1 23.0902L117.054 23H115.293L106.43 40.6751L108.523 40.6718L111.37 35.0451H120.975L123.821 40.6718L125.914 40.6751L117.1 23.0902ZM120.159 33.4375H112.189L116.174 25.4367L120.159 33.4375Z" fill="white"/>
</svg></a>`;

export const Mid_Logo =`<svg xmlns="http://www.w3.org/2000/svg" width="164" height="64" viewBox="0 0 164 64" fill="none">
<path d="M164 0H0V64H164V0Z" fill="#AD1E1F"/>
<path d="M54.3443 23.1759L54.256 23H52.4947L43.6335 40.6751L45.7262 40.6718L48.5731 35.0451H58.1776L61.0246 40.6718L63.1173 40.6751L54.3443 23.1759ZM57.3613 33.4375H49.3905L53.3765 25.4367L57.3613 33.4375Z" fill="white"/>
<path d="M39.3566 23.0024H37.181L30.4016 38.0165L23.6222 23.0024H21.4478L19.0837 40.6753H20.954L22.9235 25.879L29.5754 40.6775L30.4016 40.6753L31.2289 40.6775L37.8797 25.879L39.8503 40.6753H41.7196L39.3566 23.0024Z" fill="white"/>
<path d="M81.2887 23.0902L81.243 23H79.4816L70.6193 40.6751L72.712 40.6718L75.5589 35.0451H85.1635L88.0104 40.6718L90.1031 40.6751L81.2887 23.0902ZM84.3482 33.4375H76.3775L80.3634 25.4367L84.3482 33.4375Z" fill="white"/>
<path d="M59.806 23.0022V24.6098H65.9849V40.6751H67.7451V24.6098H73.924V23.0022H59.806Z" fill="white"/>
<path d="M93.7783 39.0675V23.0022H92.0181V40.6751H104.519V39.0675H93.7783Z" fill="white"/>
<path d="M143.155 23.0022V38.0954L129.834 23L127.83 23.0033V40.6751H129.591V25.5808L142.853 40.6168L142.901 40.6718L144.916 40.6751V23.0022H143.155Z" fill="white"/>
<path d="M117.1 23.0902L117.054 23H115.293L106.43 40.6751L108.523 40.6718L111.37 35.0451H120.975L123.821 40.6718L125.914 40.6751L117.1 23.0902ZM120.159 33.4375H112.189L116.174 25.4367L120.159 33.4375Z" fill="white"/>
</svg>
`;

export const small_logo=`<a href="https://www.maxol.co.uk/"><svg xmlns="http://www.w3.org/2000/svg" width="164" height="64" viewBox="0 0 164 64" fill="none">
<path d="M164 0H0V64H164V0Z" fill="#AD1E1F"/>
<path d="M54.3443 23.1759L54.256 23H52.4947L43.6335 40.6751L45.7262 40.6718L48.5731 35.0451H58.1776L61.0246 40.6718L63.1173 40.6751L54.3443 23.1759ZM57.3613 33.4375H49.3905L53.3765 25.4367L57.3613 33.4375Z" fill="white"/>
<path d="M39.3566 23.0024H37.181L30.4016 38.0165L23.6222 23.0024H21.4478L19.0837 40.6753H20.954L22.9235 25.879L29.5754 40.6775L30.4016 40.6753L31.2289 40.6775L37.8797 25.879L39.8503 40.6753H41.7196L39.3566 23.0024Z" fill="white"/>
<path d="M81.2887 23.0902L81.243 23H79.4816L70.6193 40.6751L72.712 40.6718L75.5589 35.0451H85.1635L88.0104 40.6718L90.1031 40.6751L81.2887 23.0902ZM84.3482 33.4375H76.3775L80.3634 25.4367L84.3482 33.4375Z" fill="white"/>
<path d="M59.806 23.0022V24.6098H65.9849V40.6751H67.7451V24.6098H73.924V23.0022H59.806Z" fill="white"/>
<path d="M93.7783 39.0675V23.0022H92.0181V40.6751H104.519V39.0675H93.7783Z" fill="white"/>
<path d="M143.155 23.0022V38.0954L129.834 23L127.83 23.0033V40.6751H129.591V25.5808L142.853 40.6168L142.901 40.6718L144.916 40.6751V23.0022H143.155Z" fill="white"/>
<path d="M117.1 23.0902L117.054 23H115.293L106.43 40.6751L108.523 40.6718L111.37 35.0451H120.975L123.821 40.6718L125.914 40.6751L117.1 23.0902ZM120.159 33.4375H112.189L116.174 25.4367L120.159 33.4375Z" fill="white"/>
</svg></a>
`;

export const humburgerIcon =`<svg class="humburger-i" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
  <path d="M21,18 C21.5522847,18 22,18.4477153 22,19 C22,19.5522847 21.5522847,20 21,20 L3,20 C2.44771525,20 2,19.5522847 2,19 C2,18.4477153 2.44771525,18 3,18 L21,18 Z M21,11 C21.5522847,11 22,11.4477153 22,12 C22,12.5522847 21.5522847,13 21,13 L3,13 C2.44771525,13 2,12.5522847 2,12 C2,11.4477153 2.44771525,11 3,11 L21,11 Z M21,4 C21.5522847,4 22,4.44771525 22,5 C22,5.55228475 21.5522847,6 21,6 L3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 L21,4 Z" fill="#383838" fill-rule="nonzero"></path>
</g>
</svg>
<svg class="close" enable-background="new -111 1 128 128" version="1.1" viewBox="-111 1 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
	<g transform="translate(-907 -672)">
		<g transform="translate(907 672)">
			<path d="M-52.7,65L-79,38.7l5.7-5.7L-47,59.3L-20.7,33l5.7,5.7L-41.3,65L-15,91.3     l-5.7,5.7L-47,70.7L-73.3,97l-5.7-5.7L-52.7,65z"></path>
		</g>
	</g>
</svg>`

export const search_icn = `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.7852 21.5898L15.6836 15.5312C17.0586 13.9414 17.832 11.9219 17.832 9.6875C17.832 4.78906 13.793 0.75 8.89453 0.75C3.95312 0.75 0 4.78906 0 9.6875C0 14.6289 3.99609 18.625 8.89453 18.625C11.0859 18.625 13.1055 17.8516 14.6953 16.4766L20.7539 22.5781C20.9258 22.707 21.0977 22.75 21.3125 22.75C21.4844 22.75 21.6562 22.707 21.7852 22.5781C22.043 22.3203 22.043 21.8477 21.7852 21.5898ZM8.9375 17.25C4.72656 17.25 1.375 13.8555 1.375 9.6875C1.375 5.51953 4.72656 2.125 8.9375 2.125C13.1055 2.125 16.5 5.51953 16.5 9.6875C16.5 13.8984 13.1055 17.25 8.9375 17.25Z" fill="white"/>
</svg>
`
export const holyday_icn = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.79766 0.25C4.80547 0.25 0.797657 4.29297 0.797657 9.25C0.797657 14.2422 4.80547 18.25 9.79766 18.25C14.7547 18.25 18.7977 14.2422 18.7977 9.25C18.7977 4.29297 14.7547 0.25 9.79766 0.25ZM9.79766 17.125C5.43828 17.125 1.92266 13.6094 1.92266 9.25C1.92266 4.92578 5.43828 1.375 9.79766 1.375C14.1219 1.375 17.6727 4.92578 17.6727 9.25C17.6727 13.6094 14.1219 17.125 9.79766 17.125ZM9.79766 10.9375C10.0789 10.9375 10.3602 10.6914 10.3602 10.375V4.75C10.3602 4.46875 10.0789 4.1875 9.79766 4.1875C9.48125 4.1875 9.23516 4.46875 9.23516 4.75V10.375C9.23516 10.6914 9.48125 10.9375 9.79766 10.9375ZM9.79766 12.3438C9.30547 12.3438 8.95391 12.7305 8.95391 13.1875C8.95391 13.6797 9.30547 14.0312 9.79766 14.0312C10.2547 14.0312 10.6414 13.6797 10.6414 13.1875C10.6414 12.7305 10.2547 12.3438 9.79766 12.3438Z" fill="#383838"/>
</svg>`
;
