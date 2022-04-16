export default function Browser() {
    return (

        <div style={{ padding: "1rem 0" }}>
            <h1>Cells</h1>
            <div style={{height: "768"}}>
                <iframe seamless src="http://localhost:9001"  width="1366" height="768"></iframe>
            </div>
            <span></span>
            <h1>Cells</h1>
        </div>
    );
}