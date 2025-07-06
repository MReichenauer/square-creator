import { useCheckBreakpoints } from "@hooks/utils/useCheckBreakpoints.ts/useCheckBreakpoints";
import NavigationDropDown from "../navigationDropDown/NavigationDropDown";
import { NavigationBar } from "../partials/navigationBar/NavigationBar";

const Navigation = () => {
	const { xs } = useCheckBreakpoints();
	return <>{xs ? <NavigationDropDown /> : <NavigationBar />}</>;
};

export default Navigation;
