module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors : {
                neutral : {
                    100 : "#E4E1EA",
                    200 : "#E4E1EA",
                    300 : "#CDC3D5",
                    500 : "#82738C",
                    700 : "#494257",
                    800 : "#302B3B",
                    900 : "#24212C",
                    dark : "#18151E"
                },
                primary : {
                    500 : "#8033CC"
                }
            }
        },
        fontFamily: {
            'sans': ['Montserrat','ui-sans-serif', 'system-ui'],
            'serif': ['Raleway','ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
            'display': ['Oswald'],
            'body': ['Montserrat'],
        }
    },
    plugins: [],
};
