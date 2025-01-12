tailwind.config = {
    theme:{
        gridTemplateColumns:{
            'auto' : 'repeat(auto-fit, minmax(200px, 1fr))'     // min value = 200 max value = 1 fraction 
        },
        animation:{
            spin_slow: 'spin 6s linear infinite'    // linear means slowely run infinite times for 6 seconds . 
        }
    },
    darkMode : 'selector'
}