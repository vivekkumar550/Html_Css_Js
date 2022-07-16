const arr = [
    { PHOTOCOPIER: "PHOTOCOPIER" },
    { AIR_CONDITIONING: "AIR_CONDITIONING" },
    { NON_SMOKING_ROOM: "NON_SMOKING_ROOM" },
    { LAUNDRY_SERVICE: "LAUNDRY_SERVICE" },
];

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            arr: [
                { PHOTOCOPIER: "PHOTOCOPIER" },
                { AIR_CONDITIONING: "AIR_CONDITIONING" },
                { NON_SMOKING_ROOM: "NON_SMOKING_ROOM" },
                { LAUNDRY_SERVICE: "LAUNDRY_SERVICE" },
            ]
        }
    }

    render() {
        return (
            <div>
                <h2>Hello who I am</h2>
            </div>
        )
    }
}


