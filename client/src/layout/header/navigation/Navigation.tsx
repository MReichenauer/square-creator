import { useCheckBreakpoints } from "@hooks/utils/useCheckBreakpoints/useCheckBreakpoints";
import { NavigationBar } from "./partials/navigationBar/NavigationBar";
import { NavigationDropDown } from "./partials/navigationDropDown/NavigationDropDown";

const Navigation = () => {
	const { xs, sm } = useCheckBreakpoints();
	return <>{xs || sm ? <NavigationDropDown /> : <NavigationBar />}</>;
};

export { Navigation };
