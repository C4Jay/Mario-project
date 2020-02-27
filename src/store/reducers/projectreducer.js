const initState = {
    projects: [
        {id:'1', title: 'help me find yoshi', content: 'Veniam Lorem sit nostrud reprehenderit duis eiusmod qui qui aliqua nostrud ex.' },
        {id:'2', title: 'help me find mario', content: 'Veniam Lorem sit nostrud reprehenderit duis eiusmod qui qui aliqua nostrud ex.' },
        {id:'3', title: 'hunt me from yoshi', content: 'Veniam Lorem sit nostrud reprehenderit duis eiusmod qui qui aliqua nostrud ex.' },
    
    
    
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT' : 
        console.log('created project', action.project)
    }
    return state

}

export default projectReducer;