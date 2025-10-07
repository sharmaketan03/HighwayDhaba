import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
const Layout = ({ children }) => {
    return (_jsxs("div", { className: "min-h-screen flex flex-col", children: [_jsx(Header, {}), _jsx("main", { className: "flex-1", children: children }), _jsx(Footer, {})] }));
};
export default Layout;
