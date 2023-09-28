export const DropDown = ({ options, value, label, onChange }) => {
    return <>
        <label>{label}</label>
        <select onChange={onChange}>{
            options?.map(({ title, value }) => {
                <optiom value={value || title} key={title}>{title}</optiom>
            })
        }</select>


    </>;


}