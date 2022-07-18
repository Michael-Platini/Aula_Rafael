import React, {useState, useMemo} from 'react'
import PageTitle from '../../components/layout/PageTitle'

function sum(a,b) {
    const future = Date.now() + 2000
    while(Date.now() < future) {}
    return a + b
}

const UseMemo = (props) => {
    const [n1, serN1] = useState(0)
    const [n2, serN2] = useState(0)
    const [n3, serN3] = useState(0)

    const result = useMemo(() => sum(n1, n2), [n1,n2])
    

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <div className="center">
                <input type="number" className="input"
                   value={n1} onChange={e => serN1(parseInt(e.target.value))} />
                <input type="number" className="input"
                   value={n2} onChange={e => serN2(parseInt(e.target.value))} />
                <input type="number" className="input"
                   value={n3} onChange={e => serN3(parseInt(e.target.value))} />
                <span className="text">{result}</span>
            </div>
        </div>
    )
}

export default UseMemo
