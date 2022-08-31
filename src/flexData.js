export const flexData = {
    container: [
        { "flex-direction": ['row', 'column', 'row-reverse', 'column-reverse'] },
        { "flex-wrap": ['wrap', 'wrap-reverse', 'nowrap'] },
        { "align-items": ['center', 'flex-start', 'flex-end', 'stretch'] },
        { 'align-content': ['center', 'flex-start', 'flex-end', 'space-around', 'space-evenly', 'space-between'] },
        { "justify-content": ['center', 'flex-start', 'flex-end', 'space-around', 'space-evenly', 'space-between'], },
        { "row-gap": ['2rem','1rem',0], },
        { "column-gap": ['2rem','1rem',0], }
    ],
    item: [
        { "flex-grow": [0] },
        { "flex-shrink": [0] },
        { "flex-basis": [0, 'auto', 'content'] },
        { "align-self": ['center', 'flex-start', 'flex-end'] },
        { "order": [0] }
    ]
}