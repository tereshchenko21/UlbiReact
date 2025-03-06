
export default function MySelect({options, defaultValue, value, onChange}) {
    return (
        <select 
            style={{marginTop: '20px'}}
            value={value}
            onChange={(event) => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}