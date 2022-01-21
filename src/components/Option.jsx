

const Option = props => {
    return (
        <>
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select
                id="favColor"
                // value={formData.favColor}
                // onChange={handleChange}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
        </>
    )
}

export default Option