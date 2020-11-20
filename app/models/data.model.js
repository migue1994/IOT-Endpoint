module.exports = mongoose => {
    return mongoose.model(
        "data",
        mongoose.Schema(
            {
                username: String,
                temperature: Object,
                airQuality: Object,
                waterLevel: Object,
                weight: Object,
                isNearTheMeal: Object,
                noise: Object
            },
            {timeStamps: true}
        )
    );
}