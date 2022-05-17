import BasicIcons from "../../components/BasicIcons";

const DUMMY_NURSES = [{
    id: 1,
    name: "enfermera",
    surname: 'joy',
    dni: 123123123,
    hospital: "el medico feliz",
}]


function Nurses () {
    return (
        <BasicIcons icon={"nurses"} data={DUMMY_NURSES} title={"Enfermeras"} buttonText={"Modificar"}/>
    )
}

export default Nurses;