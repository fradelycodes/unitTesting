var expect = require("chai").expect;

describe("checkForShip", function () {
  var checkForShip = require("../game_logic/ship_methods").checkForShip;

  it("shoul correctly report no ship at a given players coordinate", function () {
    player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    };
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
  it("shoul correctly report a ship located at the give coordinate", function () {
    player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    };
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
  });
  it("shoul handle ships located at more than one coordinate", function () {
    player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
      ],
    };
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
  it("shoul handle checking multiple ships", function () {
    player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
        {
          locations: [
            [1, 0],
            [1, 1],
          ],
        },
        {
          locations: [
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3],
          ],
        },
      ],
    };
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2]);
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
});

describe("damageShip", function () {
  let damageShip = require("../game_logic/ship_methods").damageShip;

  it("shoul register dame on a give ship at a given location", function () {
    let ship = {
      locations: [[0, 0]],
      damage: [],
    };
    damageShip(ship, [0, 0]);

    expect(ship.damage).to.not.be.empty;
    expect(ship.damage[0]).to.deep.equal([0, 0]);
  });
});

describe("fire", function () {
  let fire = require("../game_logic/ship_methods").fire;

  it("should record dame on the given players ship at a given coordinate", function () {
    let player = {
      ships: [
        {
          locations: [[0, 0]],
          damage: [],
        },
      ],
    };
    fire(player, [0, 0]);

    expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
  });
  it("should NOT record dame if there is not ships at my coordinates", function () {
    let player = {
      ships: [
        {
          locations: [[0, 0]],
          damage: [],
        },
      ],
    };
    fire(player, [9, 9]);

    expect(player.ships[0].damage).to.be.empty;
  });
});
