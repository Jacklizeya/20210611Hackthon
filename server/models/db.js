//db setup

require("dotenv").config()
const mongoose = require("mongoose")
const mongoAtlasUrl = process.env.MONGODB_URL


mongoose
  .connect(mongoAtlasUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(function () {
    console.log("Connected to DB...")
  })
  .catch(function (err) {
    console.log(err)
  }
)

const db = mongoose.connection

db.on("error", (err) => console.error("MongoDB connection error!", err))
db.once("open", () => console.log("MongoDB is now connected! @ ", mongoAtlasUrl))

const locationSchema = new mongoose.Schema({
  locationName: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
  },
  coordinates: {
    type: Object,
    required: true
  },
  type: {
    type: String
  }
});

const Swimming = mongoose.model("Swimming", locationSchema, "swimming")

const listLocations = async () => await Swimming.find({})

const listLocationsByType = async () => await Swimming.find({ type: type})

// General db functions
const closeDb = async () => await db.close({ force: true })

module.exports = {
  closeDb,
  Swimming,
  listLocations,
  listLocationsByType
}