import { stagingBaseurl } from "./sites-global/global";
let constant={
  stagingBaseurl:stagingBaseurl ,
  slugify(slugString: any) {
    slugString.toLowerCase().toString();
    slugString = slugString.replace(/[&\/\\#^+()$~%.'":*?<>{}!@]/g, "");
    slugString = slugString.replaceAll("  ", "-");
    slugString = slugString.replaceAll(" ", "-");
    return slugString.toLowerCase();
  }
}
export default constant