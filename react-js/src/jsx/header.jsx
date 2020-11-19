import {makeStyles} from '@material-ui/core/styles';
import {AppBar}  from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import React, {useState} from 'react';

const useStyles = makeStyles({
    header: {
        
        marginBottom: '24px'
    },
    headerBar: {
        alignItems: 'center',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: '50%',
        boxShadow: '0 3px 5px 2px bisque',
    }
})

const Header = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const styles = useStyles();

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    }

    return (
        <header className={styles.header}>
            <AppBar position="static" className={styles.headerBar}>
  <Tabs value={selectedTab} onChange={handleTabChange} aria-label="simple tabs example">
    <Tab label="Breadth First" />
    <Tab label="Item Two" />
    <Tab label="Item Three" />
  </Tabs>
</AppBar>
        </header>
    )
}

export default Header;