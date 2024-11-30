import react from react
export  const Child = () => {


    const fils = () => {
        console.log('je suis le composant fils')
    }
    return(
        <>

        <p> Mon composant fils</p>
        <button onClick={fils}>Envoyer</button>

        </>
    ) 
}

      

  
    


