import React, { Component, useState } from "react";
import { SideBar } from "./components/sideBar/sideBar";
import BodyBox from "./containers/bodyBox";
import TopBar from "./containers/topBar/topBar";
export interface IPage {
  title: string;
  bodyText: string;
}

interface IState {
  payload: any[];
  menuItems: string[];
  activePage: IPage;
}

const initState: IState = {
  payload: [],
  menuItems: [],
  activePage: {
    title: "",
    bodyText: "",
  },
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
      <div className="container-fluid">
        <div className="row">
          <SideBar
            menuItems={appState.menuItems}
            onMenuItemClick={(selectedMenuItem: any) => {
              console.log(selectedMenuItem);
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
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <BodyBox activePage={appState.activePage}></BodyBox>
          </main>
        </div>
      </div>
    </div>
  );
};
export default App;
