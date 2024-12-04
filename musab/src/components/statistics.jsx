import React from "react";
import "../App.css";

function Statistics({ statistics }) {
    const activePercentage = (statistics.activeusers / statistics.totalusers) * 100;

    return (
        <div className="statistics">
            <h1>Total users: {statistics.totalusers}</h1>
            <h1>Active users: {statistics.activeusers}</h1>
            <h1>New signups: {statistics.newsignups}</h1>
            <h1 class = "activepercentage">Active percentage: {activePercentage.toFixed(2)}%</h1>
        </div>
    );
}

export default Statistics;
