{/* https://v1.chakra-ui.com/guides/getting-started/redwoodjs-guide#chakraprovider-props */}
      {/* https://hashdork.com/ko/chakra-ui-tutorial/ */}
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
                  <ParentSize>
                    {(parent) => {
                      return <TestView data={newCaseData} period={30} width={parent.width} height={200}/>
                    }}
                  </ParentSize>
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
                      return <BarGraph />
                    }}
                  </ParentSize>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            </Accordion>
      </ChakraProvider>