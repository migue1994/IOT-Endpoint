module.exports = mongoose => {
    return mongoose.model(
        "data",
        mongoose.Schema(
            {
                temperature: String,
                airQuality: String,
                waterLevel: String,
                weight: String,
                waterFlow: String,
            },
            {timeStamps: true}
        )
    );
}