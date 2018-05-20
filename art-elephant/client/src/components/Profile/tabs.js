<Tabs defaultActiveKey={1} id="profile-tabs" >
                            <Tab eventKey={1} title="Statement">
                                {/* <Statement /> */}
                                <p>{profile.statement}</p>
                            </Tab>
                            <Tab eventKey={2} title="Studio Location">
                                <p>{profile.address}</p>
                                <Map location={profile.address}/>
                            </Tab>
                            <Tab eventKey={3} title="Contact">
                                <p>Contact here</p>
                            </Tab>
                        </Tabs>