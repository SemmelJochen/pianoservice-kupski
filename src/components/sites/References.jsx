import React from 'react'
import { Typography } from '@material-ui/core'

const vAndU = ['Stadttheater Minden',
    'Jazzclub Minden',
    'Jazzclub Lübbecke',
    'Neues Theater Espelkamp',
    'Kultür',
    'Alte Schule Gestrigen',
    'Reisebüro Mittelthurgau Schweiz',
    'Hapag Lloyd',
    'Die Wittekindsburg (Witthüs e.V.)',
    'Calenberger Cultour & Co e.V.',
    'Minden Marketing',
    'Kulturamt Löhne',
    'Theater auf dem Hornwerk Nienburg',
    'Zwischenakt Bühne und Konzert',
    'KuK (Kirche und Kultur im Kirchenkreis Vlotho)',
    'Kulturfabrik Vlotho',
]
export default function References(props) {
    return (
        <div
            {...props}
            style={{
                height: `calc(${window.innerHeight}px - 42px)`,
                width: "100%",
                backgroundImage: require('../../ressources/img/bg.jpg')
            }}
        >
            <Typography variant="h6" style={{ fontWeight: 600, textAlign: "center" }}>
                VERANSTALTER UND INSTITUTIONEN
            </Typography>
            <div style={{textAlign: "center"}}>
                {vAndU.map((value) => {
                    return <Typography key={value} variant="h6">
                        {value}
                    </Typography>
                })}
            </div>
        </div>
    )
}
