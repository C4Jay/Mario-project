export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstname : 'Cee',
            authorSurname : 'Jay',
            authorId: 69,
            createAt: new Date()
        }).then(() => {
                dispatch({type : 'CREATE_PROJECT', project: project});
         
        }).catch((error => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error});
        }))
   
    }
}