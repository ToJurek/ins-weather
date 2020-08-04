import moment from "moment";
import IWeather from "../../components/interfaces/IWeather";

export const mapWeather = (response: any): IWeather => {
    function capitalizeFirstLetter(text: string): string {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    function getFormattedDatetime(datetime: number): string {
        return moment.unix(datetime).format("DD/MM/YY hh:MM A");
    }

    function asTemperature(value: number): string {
        return Math.round(value) + "°";
    }

    function ashPa(value: number): string {
        return value + "hPa"
    }

    function asPercent(value: number): string {
        return value + "%"
    }
    return {
        icon: response.weather[0].icon,
        description: capitalizeFirstLetter(response.weather[0].description),
        temp: asTemperature(response.main.temp),
        feelsLike: asTemperature(response.main.feels_like),
        tempMin: asTemperature(response.main.temp_min),
        tempMax: asTemperature(response.main.temp_max),
        pressure: ashPa(response.main.pressure),
        humidity: asPercent(response.main.humidity),
        clouds: asPercent(response.clouds.all),
        time: getFormattedDatetime(response.dt)
    }
}
