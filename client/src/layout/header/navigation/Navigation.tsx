import { useCheckBreakpoints } from "@hooks/utils/useCheckBreakpoints/useCheckBreakpoints";
import NavigationDropDown from "./partials/navigationDropDown/NavigationDropDown";
import { NavigationBar } from "./partials/navigationBar/NavigationBar";

const Navigation = () => {
	const { xs, sm } = useCheckBreakpoints();
	return <>{xs || sm ? <NavigationDropDown /> : <NavigationBar />}</>;
};

export default Navigation;
