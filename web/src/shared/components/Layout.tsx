import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

//Componentes Internos do Projeto
import Header from "./Header";
import Sidebar from "./Sidebar";

export interface LayoutProps {
    mode: 'light' | 'dark';
    toggleMode: () => void;
}

const Layout = ({ mode, toggleMode }: LayoutProps) => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Header></Header>
                <Sidebar mode={mode} toggleMode={toggleMode} />
                <Box component="main" sx={{ maxHeight: '100vh', flexGrow: 1, p: 3, overflowY: 'auto' }}>
                    <Outlet />
                </Box>
            </Box>
        </>
    );
}

export default Layout;