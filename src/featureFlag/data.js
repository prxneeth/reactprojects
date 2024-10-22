

const dummyApiResponse = {
    showLightDarkTheme: true,
    showTictactoeBoard: true,
    showRandomColorGenerater: true,
    showAccordian: false,
    showTreeView: true
}

function featureFlagDataServiceCall() {
    return new Promise((resolve, reject) => {
        if (dummyApiResponse) {
            setTimeout(() => resolve(dummyApiResponse), 500);
        } else {
            reject("Some error occurred");
        }
    });
}

export default featureFlagDataServiceCall;