import { Drawer, Typography, makeStyles,List,
     ListItem, ListItemIcon, ListItemText, AppBar, Toolbar } from "@material-ui/core";
import { Home,LibraryBooks,AddCircleOutlineOutlined,LogoutOutlined } from "@mui/icons-material";
import { useNavigate,useLocation } from "react-router-dom";


const drawerWidth = 240;

    const useStyles = makeStyles ((theme) => {
        return {
            drawer:{
                width:drawerWidth
            },
            drawerPaper:{
                width:drawerWidth
            },
            page:{
                width:'100%',
                padding: theme.spacing(3)
            },
            root:{
                display:'flex'
            },
            active:{
                background:'#f4f4f4'
            },
            title:{
                padding: theme.spacing(1.5)
            },
            appbar:{
                backgroundColor: '#fff',
                color: '#000',
                width: `calc(100% - ${drawerWidth}px)`
            },
            toolbar:theme.mixins.toolbar,
            appbarTitle:{
                flexGrow: 1
            }
        }
    })


const Layout = ({children}:{children:React.ReactNode}):JSX.Element => {

const classes = useStyles(); 
const navigate = useNavigate();
const location = useLocation();

const menuItems = [
    {
        text: 'Home',
        icon: <Home color="primary" />,
        path: '/'
        
    },
    {
        text: 'Books',
        icon: <LibraryBooks color="primary" />,
        path: '/books'
    },
    {
        text: 'Add Book',
        icon: <AddCircleOutlineOutlined color="primary" />,
        path: '/addbook'   
    },
    {
        text: 'Logout',
        icon: <LogoutOutlined color="primary" />,
        path: '/logout'
    }
]


    return ( 
            
            <div className={classes.root}>
                {/* App Bar */}
                <AppBar className={classes.appbar}>
                    <Toolbar>
                        <Typography variant="h5" className={classes.appbarTitle} >
                            Library Management System
                        </Typography>
                        <Typography variant="h5">
                            Ainamaani
                        </Typography>
                    </Toolbar>
                </AppBar>
                {/* Sidebar */}
                <Drawer 
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{
                    paper:classes.drawerPaper
                }}
                >
                    <div>
                        <Typography variant="h4" className={classes.title}>
                            LMT
                        </Typography>
                    </div>
                    {/* Links */}
                    <List>
                        {
                            menuItems.map(item =>(
                                <ListItem button
                                 key={item.text}
                                 onClick={()=> navigate(item.path)}
                                 className={location.pathname === item.path ? classes.active : undefined }
                                 >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText secondary={item.text} />
                                </ListItem>
                            ))
                        }
                    </List>
                </Drawer>
                <div className={classes.page}>
                    <div className={classes.toolbar}></div>
                    {children}
                </div>
            </div>  
     );
}
 
export default Layout;