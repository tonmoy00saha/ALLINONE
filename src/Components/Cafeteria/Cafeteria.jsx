
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Food from "./Food/Food";


const Cafeteria = () => {
    const categories = ['breakfast', 'lunch', 'snacks', 'dinner'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu, setMenu] = useState([]);
    
    useEffect(()=>{
        fetch("/Food.json")
        .then(res=>res.json())
        .then(data=>{
            setMenu(data);
        });
    },[]);

    const breakfast = menu.filter(item => item.category==='Breakfast');
    const lunch = menu.filter(item => item.category==='Lunch');
    const snack = menu.filter(item => item.category==='Snacks');
    const dinner = menu.filter(item => item.category==='Dinner');
    console.log(breakfast);
        
    return (
        <div className="my-12">
          {
              <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
              <div className='text-center text-2xl font-medium'>
                  <TabList>
                      <Tab>Breakfast</Tab>
                      <Tab>Lunch</Tab>
                      <Tab>Snacks</Tab>
                      <Tab>Dinner</Tab>
                  </TabList>
              </div>
  
                  <TabPanel>
                      <Food items={breakfast}></Food>
                  </TabPanel>
                  <TabPanel>
                      <Food items={lunch}></Food>
                  </TabPanel>
                  <TabPanel>
                      <Food items={snack}></Food>
                  </TabPanel>
                  <TabPanel>
                      <Food items={dinner}></Food>
                  </TabPanel>
                  
              </Tabs>
          }
        </div>
    );
};

export default Cafeteria;