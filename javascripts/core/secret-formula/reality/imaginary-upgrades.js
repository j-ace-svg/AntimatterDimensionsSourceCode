"use strict";

GameDatabase.reality.imaginaryUpgrades = (function() {
  const rebuyable = props => {
    props.cost = () => getHybridCostScaling(
      player.reality.rebuyables[props.id],
      1e30,
      props.initialCost,
      props.costMult,
      props.costMult / 10,
      new Decimal("1e309"),
      1e3,
      props.initialCost * props.costMult
    );
    const { effect } = props;
    props.effect = () => Math.pow(effect, player.reality.rebuyables[props.id]);
    props.formatEffect = value => formatX(value, 2, 0);
    props.formatCost = value => format(value, 2, 0);
    return props;
  };
  return [
    rebuyable({
      name: "Temporal Intensifier",
      id: 1,
      initialCost: 1,
      costMult: 30,
      description: () => `Increase Temporal Amplifier multipler by +${format(0.02, 2, 2)}`,
      effect: 1.02
    }),
    rebuyable({
      name: "Replicative Intensifier",
      id: 2,
      initialCost: 1,
      costMult: 30,
      description: () => `Increase Replicative Amplifier multipler by +${format(0.1, 2, 2)}`,
      effect: 1.1
    }),
    rebuyable({
      name: "Eternal Intensifier",
      id: 3,
      initialCost: 2,
      costMult: 30,
      description: () => `Increase Eternal Amplifier multipler by +${format(0.3, 2, 2)}`,
      effect: 1.3
    }),
    rebuyable({
      name: "Superluminal Intensifier",
      id: 4,
      initialCost: 2,
      costMult: 30,
      description: () => `Increase Superluminal Amplifier multipler by +${format(0.02, 2, 2)}`,
      effect: 1.02
    }),
    rebuyable({
      name: "Boundless Intensifier",
      id: 5,
      initialCost: 3,
      costMult: 50,
      description: () => `Increase Boundless Amplifier multipler by +${format(0.25, 2, 2)}`,
      effect: 1.25
    }),
    rebuyable({
      name: "?????",
      id: 6,
      initialCost: 3,
      costMult: 50,
      description: () => `Increase the RM cap by ${formatX(1e100)}`,
      effect: 1e100
    }),
    rebuyable({
      name: "?????",
      id: 7,
      initialCost: 3,
      costMult: 50,
      description: () => `Delay glyph level instability by +${formatInt(200)}`,
      effect: 200
    }),
    {
      name: "?????",
      id: 8,
      cost: 15,
      requirement: "[NYI]",
      hasFailed: () => false,
      checkRequirement: () => false,
      checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
      description: "[NYI]",
      effect: () => 0,

    },
    {
      name: "?????",
      id: 9,
      cost: 15,
      requirement: () => `[NYI]`,
      hasFailed: () => false,
      checkRequirement: () => false,
      checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
      description: `[NYI]`,
      effect: () => 0
    },
    {
      name: "?????",
      id: 10,
      cost: 15,
      requirement: () => `[NYI]`,
      hasFailed: () => false,
      checkRequirement: () => false,
      checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
      description: () => `[NYI]`,
      effect: () => 0
    },
    {
      name: "?????",
      id: 11,
      cost: 50,
      requirement: () => `[NYI]`,
      hasFailed: () => false,
      checkRequirement: () => false,
      checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
      description: "[Some kind of Ra-Teresa QoL?]",
      effect: () => 0,
    },
    {
      name: "?????",
      id: 12,
      cost: 50,
      requirement: () => `[NYI]`,
      hasFailed: () => false,
      checkRequirement: () => false,
      checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
      description: "[Glyph alchemy buff]",
      effect: () => 0,
    },
    {
      name: "?????",
      id: 13,
      cost: 50,
      requirement: () => `[NYI]`,
      hasFailed: () => false,
      checkRequirement: () => false,
      checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
      description: () => `[Tesseract buff]`,
      effect: () => 0,
    },
    {
      name: "?????",
      id: 14,
      cost: 50,
      requirement: () => `[NYI]`,
      hasFailed: () => false,
      checkRequirement: () => false,
      checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
      description: "Cursed glyphs are weakened",
      effect: () => 0,
    },
    {
      name: "?????",
      id: 15,
      cost: 50,
      requirement: () => `[NYI]`,
      hasFailed: () => false,
      checkRequirement: () => false,
      checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
      description: () => `Convert Antimatter Dimensions to Continuum`,
      effect: () => 0,

    },
    {
      name: "?????",
      id: 16,
      cost: 1500,
      requirement: () => `[NYI]`,
      hasFailed: () => false,
      checkRequirement: () => false,
      checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
      description: "[Lai'tela 1]",
      effect: 0,
    },
    {
      name: "?????",
      id: 17,
      cost: 1500,
      requirement: () => `[NYI]`,
      hasFailed: () => false,
      checkRequirement: () => false,
      checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
      description: () => `[Lai'tela 2]`,
      effect: 0,
    },
    {
      name: "?????",
      id: 18,
      cost: 1500,
      requirement: () => `[NYI]`,
      hasFailed: () => false,
      checkRequirement: () => false,
      checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
      description: "[Lai'tela 3]",
      effect: () => 0,
    },
    {
      name: "?????",
      id: 19,
      cost: 1500,
      requirement: () => `[NYI]`,
      hasFailed: () => false,
      checkRequirement: () => false,
      checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
      description: "[Lai'tela 4]",
      effect: () => 0,
    },
    {
      name: "?????",
      id: 20,
      cost: 1500,
      requirement: () => `[NYI]`,
      hasFailed: () => false,
      checkRequirement: () => false,
      checkEvent: GAME_EVENT.GAME_TICK_AFTER,
      description: "[Lai'tela 5]",
      effect: () => 0,
    },
    {
      name: "?????",
      id: 21,
      cost: 100000,
      requirement: () => `[NYI]`,
      hasFailed: () => false,
      checkRequirement: () => false,
      checkEvent: GAME_EVENT.GAME_TICK_AFTER,
      description: "[Pelle 1]",
      effect: () => 0,
    },
    {
      name: "?????",
      id: 22,
      cost: 100000,
      requirement: () => `[NYI]`,
      hasFailed: () => false,
      checkRequirement: () => false,
      checkEvent: GAME_EVENT.GAME_TICK_AFTER,
      description: "[Pelle 2]",
      effect: () => 0,

    },
    {
      name: "?????",
      id: 23,
      cost: 100000,
      requirement: () => `[NYI]`,
      hasFailed: () => false,
      checkRequirement: () => false,
      checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
      description: "[Pelle 3]",
      effect: () => 0,
    },
    {
      name: "?????",
      id: 24,
      cost: 100000,
      requirement: () => `[NYI]`,
      hasFailed: () => false,
      checkRequirement: () => false,
      checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
      description: "[Pelle 4]",
      effect: () => 0,
    },
    {
      name: "?????",
      id: 25,
      cost: 100000,
      requirement: () => `[NYI]`,
      checkRequirement: () => false,
      checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
      description: "[Pelle 5]",
      effect: () => 0,
    },
  ];
}());
