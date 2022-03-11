import React, { Component, useState } from "react";
import { SideBar } from "./components/sideBar/sideBar";
import BodyBox from "./containers/bodyBox";
import TopBar from "./containers/topBar/topBar";
interface IPage {
  title?: string;
  body?: string;
}

interface IState {
  payload: any[];
  menuItems: string[];
  activePage: IPage;
}

const initState: IState = {
  payload: [],
  menuItems: [],
  activePage: {},
};

const getTitlesArray = (pages: any) => {
  return pages.map((page: any) => page.title);
};

const App = () => {
  const [appState, setAppState] = useState(initState); //global store. is an object. api response
  console.log(appState);
  return (
    <div>
      <TopBar
        onResponse={(resp: any) =>
          setAppState((prevState) => {
            return {
              ...prevState,
              payload: resp.Pages,
              menuItems: getTitlesArray(resp.Pages),
            };
          })
        }
      />
      <SideBar
        menuItems={appState.menuItems}
        onMenuItemClick={(selectedMenuItem: any) => {
          console.log(selectedMenuItem)
          setAppState((prevState: any) => {
            return {
              ...prevState,
              activePage: appState.payload.filter(
                (page: any) => page.title === selectedMenuItem
              )[0],
            };
          });
        }}
        activeItem={appState.activePage.title}
      />
      <main className="Content">
        <BodyBox></BodyBox>
      </main>
    </div>
  );
};
export default App;
