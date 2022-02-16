const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeyTransport = this.journeys.filter((journey) => {
    if(journey.transport === transport){
      return journey
    }
  })
  return journeyTransport
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysWithMinDistance = this.journeys.filter((journey) => {
    if(journey.distance > minDistance){
      return journey
    }
  })
  return journeysWithMinDistance
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return journeyDistanceTotal = this.journeys.reduce((total, journey) => {
    return total += journey.distance
 }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
