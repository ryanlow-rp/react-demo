export default function Header(props) {
    return (
        <>
            <header className='bg-primary text-white py-3 mb-3'>
                <div className='container'>
                    <h1 className='mb-0'>{props.title ?? 'Website'}</h1>
                </div>
            </header>
        </>
    )
}
