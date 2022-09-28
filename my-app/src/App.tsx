import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, ChakraProvider } from '@chakra-ui/react';
import { ParentSize } from '@visx/responsive';
// import { BarGraphLecture } from './view/lecture';
import { BarGraphLecture } from './tutorial';
import { covidDataKorea } from './covid-data-korea';

export interface INewCase {
  date: string,
  newCases: number,
  newCaseSmoothed: number,
}

function App() {

  const [newCaseData, setNewCaseData] = useState<INewCase[]>([])

  useEffect(() => {
    const refined = covidDataKorea.map(o => {
      return {
        date: o['date'], newCases: Number(o['new_cases'] ?? 0),
        newCaseSmoothed: Number(o['new_cases_smoothed'] ?? 0),
      }
    })
    setNewCaseData(refined)
  }, [])
  return (
    <div className="App">
       <ChakraProvider>
      <Accordion allowMultiple defaultIndex={[0]}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    TEST
                  </Box>
                  <AccordionIcon/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box m={2}>
                  
                  {/* <ParentSize>
                    {(parent) => {
                      return <TestView data={newCaseData} period={30} width={parent.width} height={200}/>
                    }}
                  </ParentSize> */}
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    TEST
                  </Box>
                  <AccordionIcon/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box m={2}>
                  <ParentSize>
                    {(parent) => {
                      console.log(parent);
                      return <BarGraphLecture 
                      width={parent.width} height={200}
                       />
                    }}
                  </ParentSize>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            </Accordion>
      </ChakraProvider>
    </div>
  );
}

export default App;