import React from 'react';
import { SideMenu, CyclePage, Title, Content, Header, PageContent,
 Img, MenuTitle, Cycles } from './style';

import LogoApp from '../../assets/img/Loader.png'
import NewCycleCard from '../../components/card-cycle/index'
import CycleCard from '../../components/cycle';
const CyclesList = () => {
    return(
        <CyclePage> 
            <SideMenu>
                <Img src={LogoApp} width={52} height={52} alt="Logo App" draggable={false}/>
                <MenuTitle>Cycle</MenuTitle>
            </SideMenu>
            <Header></Header>
            <PageContent>
                <Content>
                    <Title>Cycles List</Title>
                </Content>
                <Cycles>
                    <NewCycleCard/>
                    <CycleCard title={'Fazer Bike'}/>
                    <CycleCard title={'Terminar API em Nodejs'}/>
                    <CycleCard title={'Aprendar a Cozinhar'}/>
                    <CycleCard title={'Aprendar a Cozinhar'}/>
                    <CycleCard title={'Aprendar a Cozinhar'}/>
                    <CycleCard title={'Aprendar a Cozinhar'}/>
                    <CycleCard title={'Aprendar a Cozinhar'}/>
                    <CycleCard title={'Aprendar a Cozinhar'}/>
                    <CycleCard title={'Aprendar a Cozinhar'}/>
                    <CycleCard title={'Aprendar a Cozinhar'}/>
                    <CycleCard title={'Aprendar a Cozinhar'}/>
                </Cycles>  
            </PageContent>
        </CyclePage>
    )
  }
  export default CyclesList;