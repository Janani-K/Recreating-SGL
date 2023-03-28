import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { useEffect } from 'react'

const ApexChart = () => {
    const data = {
        "MostRecent": {
            "At": "2023-03-02T13:14:25",
            "Value": 8.4
        },
        "Datapoints": [
            {
                "At": "2023-03-02T13:00:00",
                "Value": 8.3
            },
            {
                "At": "2023-03-02T12:00:00",
                "Value": 7.7
            },
            {
                "At": "2023-03-02T11:00:00",
                "Value": 7.6
            },
            {
                "At": "2023-03-02T10:00:00",
                "Value": 6
            },
            {
                "At": "2023-03-02T09:00:00",
                "Value": 2.5
            },
            {
                "At": "2023-03-02T08:00:00",
                "Value": -0.1
            },
            {
                "At": "2023-03-02T07:00:00",
                "Value": -0.5
            },
            {
                "At": "2023-03-02T06:00:00",
                "Value": -0.4
            },
            {
                "At": "2023-03-02T05:00:00",
                "Value": -0.2
            },
            {
                "At": "2023-03-02T04:00:00",
                "Value": -0.1
            },
            {
                "At": "2023-03-02T03:00:00",
                "Value": 0.1
            },
            {
                "At": "2023-03-02T02:00:00",
                "Value": 0.3
            },
            {
                "At": "2023-03-02T01:00:00",
                "Value": 0.6
            },
            {
                "At": "2023-03-02T00:00:00",
                "Value": 1.1
            },
            {
                "At": "2023-03-01T23:00:00",
                "Value": 1.3
            },
            {
                "At": "2023-03-01T22:00:00",
                "Value": 1.2
            },
            {
                "At": "2023-03-01T21:00:00",
                "Value": 1.4
            },
            {
                "At": "2023-03-01T20:00:00",
                "Value": 2.8
            },
            {
                "At": "2023-03-01T19:00:00",
                "Value": 3.3
            },
            {
                "At": "2023-03-01T18:00:00",
                "Value": 4.1
            },
            {
                "At": "2023-03-01T17:00:00",
                "Value": 4.6
            },
            {
                "At": "2023-03-01T16:00:00",
                "Value": 4
            },
            {
                "At": "2023-03-01T15:00:00",
                "Value": 5.6
            },
            {
                "At": "2023-03-01T14:00:00",
                "Value": 5.4
            },
            {
                "At": "2023-03-01T13:00:00",
                "Value": 6
            },
            {
                "At": "2023-03-01T12:00:00",
                "Value": 9.4
            },
            {
                "At": "2023-03-01T11:00:00",
                "Value": 9.1
            },
            {
                "At": "2023-03-01T10:00:00",
                "Value": 6.4
            },
            {
                "At": "2023-03-01T09:00:00",
                "Value": 2.7
            },
            {
                "At": "2023-03-01T08:00:00",
                "Value": -1
            },
            {
                "At": "2023-03-01T07:00:00",
                "Value": -1.6
            },
            {
                "At": "2023-03-01T06:00:00",
                "Value": -1.5
            },
            {
                "At": "2023-03-01T05:00:00",
                "Value": -1.3
            },
            {
                "At": "2023-03-01T04:00:00",
                "Value": -1
            },
            {
                "At": "2023-03-01T03:00:00",
                "Value": -0.7
            },
            {
                "At": "2023-03-01T02:00:00",
                "Value": -0.3
            },
            {
                "At": "2023-03-01T01:00:00",
                "Value": -0.3
            }
        ],
        "Id": "DSIDx2006x194x0-SGL-PITCH-SENSOR",
        "SensorType": "urn:sgl:air-temp",
        "DataSource": "https://sglanalyser1a.azurewebsites.net/api/v1/pitches/194/datastream/DSIDx2006x194x0-SGL-PITCH-SENSOR/data",
        "MostRecentSource": "https://sglanalyser1a.azurewebsites.net/api/v1/pitches/194/datastream/DSIDx2006x194x0-SGL-PITCH-SENSOR/mostrecent",
        "Culture": null,
        "Name": "Temperature",
        "UnitsSystem": null,
        "Unit": "°C",
        "NumberOfDigits": 1,
        "AggregateType": "avg",
        "TimeZoneInfo": null,
        "DeviceId": null,
        "DeviceFriendlyName": null
    }

    const Datapoints = data.Datapoints
    const atSeries = [], valueSeries = []


    const series = [{
        // name: "STOCK ABC",
        data: valueSeries
    }];

    const options = {
        chart: {
            toolbar: {
                show: false,
            },
            type: 'area',
            height: 350,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false
        },
        stroke: {
            curve: 'straight'
        },
        labels: atSeries,
        xaxis: {
            type: 'datetime',
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            tooltip: {
                enabled: false
            }
        },
        yaxis: {
            labels: {
                show: false
            },
            tooltip: {
                enabled: false
            }
        },
        legend: {
            show: false
        }
    }

    useEffect(() => {
        atSeries.push(...Datapoints.map(eachdata => (eachdata.At)))
        valueSeries.push(...Datapoints.map(eachdata => (eachdata.Value)))

        return () => {
            console.log("At Series", atSeries)
            console.log("Value Series", valueSeries)
        }
    }, [])


    return (
        <>
            {/* <div>{console.log(data.MostRecent)}</div> */}
            {
                data.array.forEach(element => {
                
                })
            }
            <ReactApexChart options={options} series={series} type="area" height={100} width={300}></ReactApexChart >
        </>
    )
}

export default ApexChart