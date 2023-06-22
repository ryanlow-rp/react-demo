import { useState } from 'react'

export default function FineCalculator(props) {
    const [daysLate, setDaysLate] = useState(0)
    const [bookType, setBookType] = useState('normal')
    const [additionalInfo, setAdditionalInfo] = useState([])
    const [libraryBranch, setLibraryBranch] = useState('Yishun')
    const [calculateClicked, setCalculatedClicked] = useState(false)

    const calculateFine = () => {
        let fine = parseInt(daysLate) * 1 // Base fine is $1 per day

        if (bookType === 'reference') {
            fine *= 2 // Double the fine for reference books
        }

        if (additionalInfo.includes('missingPages')) {
            fine += 10 // Additional $10 fine for missing pages
        }

        if (additionalInfo.includes('damagedCover')) {
            fine += 20 // Additional $20 fine for damaged cover
        }

        if (additionalInfo.includes('moreThan30Days')) {
            fine += 30 // Additional $30 fine for more than 30 days late
        }
        return fine
    }

    const handleCheckbox = (e) => {
        if (e.target.checked) {
            // 1. clone the original array
            // 2. update the clone
            // 3. set the clone as the new state value
            const clone = [...additionalInfo, e.target.value]
            setAdditionalInfo(clone)
        } else {
            // todo: remove from the array
            // 1. clone the original array
            // 2. remove the index
            // 3. set the clone back into the state

            // the filter function returns a new array
            // it takes in one argument known as the filtering function
            const cloned = additionalInfo.filter(
                (item) => item !== e.target.value
            )
            setAdditionalInfo(cloned)
        }
    }

    return (
        <>
            <h2>Fine Calculator</h2>

            <div className='form-group'>
                <label htmlFor='daysLate'>Days late:</label>
                <input
                    type='number'
                    className='form-control'
                    id='daysLate'
                    value={daysLate}
                    onChange={(event) => {
                        setDaysLate(event.target.value)
                    }}
                />
                {daysLate < 0 && (
                    <div
                        className='invalid-feedback'
                        style={{ display: 'block' }}
                    >
                        Please enter a valid number of days late.
                    </div>
                )}
            </div>

            <div className='form-group'>
                <label>Type of Book:</label>
                <div className='form-check'>
                    <input
                        type='radio'
                        className='form-check-input'
                        id='normal'
                        name='bookType'
                        value='normal'
                        checked={bookType === 'normal'}
                        onChange={(e) => {
                            setBookType(e.target.value)
                        }}
                    />
                    <label htmlFor='normal' className='form-check-label'>
                        Normal
                    </label>
                </div>
                <div className='form-check'>
                    <input
                        type='radio'
                        className='form-check-input'
                        id='reference'
                        name='bookType'
                        value='reference'
                        checked={bookType === 'reference'}
                        onChange={(e) => {
                            setBookType(e.target.value)
                        }}
                    />
                    <label htmlFor='reference' className='form-check-label'>
                        Reference
                    </label>
                </div>

                <div className='form-group'>
                    <label>Additional Info:</label>
                    <div className='form-check'>
                        <input
                            type='checkbox'
                            className='form-check-input'
                            id='missingPages'
                            value='missingPages'
                            checked={additionalInfo.includes('missingPages')}
                            onChange={handleCheckbox}
                        />
                        <label
                            htmlFor='missingPages'
                            className='form-check-label'
                        >
                            Missing Pages (+$10)
                        </label>
                    </div>
                    <div className='form-check'>
                        <input
                            type='checkbox'
                            className='form-check-input'
                            id='damagedCover'
                            value='damagedCover'
                            checked={additionalInfo.includes('damagedCover')}
                            onChange={handleCheckbox}
                        />
                        <label
                            htmlFor='damagedCover'
                            className='form-check-label'
                        >
                            Damaged Cover (+$20)
                        </label>
                    </div>
                    <div className='form-check'>
                        <input
                            type='checkbox'
                            className='form-check-input'
                            id='moreThan30Days'
                            value='moreThan30Days'
                            checked={additionalInfo.includes('moreThan30Days')}
                            onChange={handleCheckbox}
                        />
                        <label
                            htmlFor='moreThan30Days'
                            className='form-check-label'
                        >
                            More than 30 Days Late (+$30)
                        </label>
                    </div>
                </div>
                <div className='form-group'>
                    <label>Library Branch:</label>
                    <select
                        className='form-control mb-1'
                        name='branch'
                        value={libraryBranch}
                        onChange={(e) => setLibraryBranch(e.target.value)}
                    >
                        <option value='yishun'>Yishun</option>
                        <option value='amk'>Ang Mio Ko</option>
                        <option value='somerset'>Somerset</option>
                    </select>
                </div>

                <button
                    onClick={() => {
                        setCalculatedClicked(true)
                    }}
                >
                    Calculate Fine
                </button>

                {calculateClicked ? (
                    <div class='mt-2'>Total Fine: {calculateFine()}</div>
                ) : null}
            </div>
        </>
    )
}
