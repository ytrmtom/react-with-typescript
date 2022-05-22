import useNewSubForm from '../hooks/useNewSubForm'
import { Sub } from '../types'




interface FormProps {
    onNewSub: (newSub: Sub) => void
}


export const Form = ({ onNewSub }: FormProps) => {

    const [inputValues, dispatch] = useNewSubForm()

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onNewSub(inputValues);
        dispatch({ type: "clear" });
    }


    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = evt.target;

        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })

    }

    const handleClear = () => {
        dispatch({
            type: "clear"
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={inputValues.nick} name="nick" placeholder="nick" />
                <input onChange={handleChange} type="text" value={inputValues.avatar} name="avatar" placeholder="avatar" />
                <input onChange={handleChange} type="number" value={inputValues.subMonths} name="subMonths" placeholder="subMonths" />
                <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description" />

                <button onClick={handleClear} type="button">Clear the Form</button>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}
