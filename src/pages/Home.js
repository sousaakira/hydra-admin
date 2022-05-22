import BoxComponet from "../components/Box";
function Home(){
    return(
        <>
            <BoxComponet 
                title="Configurações" 
                body="Abre as opções de configurações" 
                url="/config" 
            />

            <BoxComponet 
                title="Relatórios" 
                body="Abre as opções de relatórios" 
                url="/login" 
            />
        </>
    )
}

export default Home;