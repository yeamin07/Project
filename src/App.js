import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import './App.css'

const App = () => {
    const [title, setTitle] = useState('');
    const client = useQueryClient()

    const fetchAllNote = async () => {
        const response = await fetch(`http://localhost:4000/notes`);
        return await response.json();
    }

    const { data, isLoading } = useQuery(['notes'], fetchAllNote)

    const createNote = async () => {
        const newNote = {
            id: Date.now() + '',
            title: title,
        }
        if(!title){
            return alert(`Enter Something`)
        }
        const res = await fetch(`http://localhost:4000/notes`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newNote)
        })
        setTitle('')
        return await res.json()
    }

    const noteCreateMutation = useMutation(createNote, {
        onSuccess: () => {
            client.invalidateQueries(['notes'])
        }
    })

    const removeHandler = async (id) => {
        const res = await fetch(`http://localhost:4000/notes/${id}`, {
            method: 'DELETE'
        });
        return await res.json()
    }

    const removeNoteMutation = useMutation((id) => removeHandler(id), {
        onSuccess: () => {
            client.invalidateQueries(['notes'])
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        noteCreateMutation.mutate()
    }

    if (isLoading) {
        return <div>Loading.....</div>
    }

    return (
        <div className='App'>
            <form onSubmit={handleSubmit}>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                <button type='submit'>Create Note</button>
            </form>
            <ul>
                {data?.map(item => (
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <button onClick={() => removeNoteMutation.mutate(item.id)}>Remove button</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App