import type { Resort } from '../types/index'

export const resorts: Resort[] = [
  {
    id: 'chamonix',
    name: 'Chamonix',
    region: 'Haute-Savoie, France',
    elevation: 1035,
    coordinates: {
      latitude: 45.9237,
      longitude: 6.8694
    }
  },
  {
    id: 'verbier',
    name: 'Verbier',
    region: 'Valais, Switzerland',
    elevation: 1500,
    coordinates: {
      latitude: 46.3056,
      longitude: 7.2261
    }
  },
  {
    id: 'zermatt',
    name: 'Zermatt',
    region: 'Valais, Switzerland',
    elevation: 1620,
    coordinates: {
      latitude: 46.0207,
      longitude: 7.7491
    }
  },
  {
    id: 'courmayeur',
    name: 'Courmayeur',
    region: 'Aosta Valley, Italy',
    elevation: 1224,
    coordinates: {
      latitude: 45.7975,
      longitude: 6.9468
    }
  },
  {
    id: 'les-gets',
    name: 'Les Gets',
    region: 'Portes du Soleil, France',
    elevation: 1002,
    coordinates: {
      latitude: 46.3619,
      longitude: 6.4387
    }
  },
  {
    id: 'tignes',
    name: 'Tignes',
    region: 'Tarentaise Valley, France',
    elevation: 2100,
    coordinates: {
      latitude: 45.4686,
      longitude: 6.4106
    }
  },
  {
    id: 'val-disere',
    name: 'Val d\'Isère',
    region: 'Tarantaise Valley, France',
    elevation: 1850,
    coordinates: {
      latitude: 45.4371,
      longitude: 6.5947
    }
  },
  {
    id: 'meribel',
    name: 'Méribel',
    region: 'Three Valleys, France',
    elevation: 1400,
    coordinates: {
      latitude: 45.3852,
      longitude: 6.5656
    }
  }
]
