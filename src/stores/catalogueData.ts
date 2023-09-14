import { defineStore } from 'pinia';
import type { StellarLocation, MTSubtype, MTType, ShipType, Tiers, FormItem } from '../types/catalogue';
import { albumEntry, discovererParm, addInfoMt, starshipOther } from '../functions/functions';

interface State {
  name: FormItem<string>;
  discoverer: FormItem<string>;
  discovererReddit: FormItem<string>;
  file: FormItem<File | null>;
  compressedFile: File | null;
  economy: FormItem<'★★★ Economy' | '★★ Economy' | '★ Economy' | '{{BlackMarket}}' | '★ Economy (Abandoned)'>;
  glyphs: FormItem<string>;
  coordinates: FormItem<string>;
  size: FormItem<string>;
  tier: FormItem<Tiers>;
  systemFaction: FormItem<'Korvax' | 'Vy\'keen' | 'Gek'>;
  saveReloadLocationName: FormItem<string>;
  locationName: FormItem<string>;
  saveReloadLocationType: FormItem<StellarLocation>;
  locationType: FormItem<StellarLocation>;
  notes: FormItem<string>;
  features: FormItem<string>;
  depth: FormItem<string>;
  stomach: FormItem<string>;
  slots: FormItem<string>;
  subtype: FormItem<MTSubtype>;
  mtType: FormItem<MTType>;
  shipType: FormItem<ShipType>;
  isCrashed: FormItem<boolean>;
}

export const useCatalogueDataStore = defineStore('catalogueData', {
  state: (): State => ({
    name: {
      isActive: true,
      value: '',
    },
    discoverer: {
      isActive: true,
      value: '',
    },
    discovererReddit: {
      isActive: true,
      value: '',
    },
    file: {
      isActive: true,
      value: null,
    },
    compressedFile: null,
    economy: {
      isActive: true,
      value: '★★★ Economy',
    },
    glyphs: {
      isActive: true,
      value: '',
    },
    coordinates: {
      isActive: false,
      value: '',
    },
    size: {
      isActive: true,
      value: '',
    },
    tier: {
      isActive: true,
      value: 'C', // this should be "class"
    },
    systemFaction: {
      isActive: false,
      value: 'Korvax',
    },
    saveReloadLocationName: {
      isActive: false,
      value: '',
    },
    locationName: {
      isActive: false,
      value: '',
    },
    saveReloadLocationType: {
      isActive: true,
      value: 'space station',
    },
    locationType: {
      isActive: true,
      value: 'space station',
    },
    notes: {
      isActive: true,
      value: '',
    },
    features: {
      isActive: true,
      value: '',
    },
    depth: {
      isActive: true,
      value: '',
    },
    stomach: {
      isActive: true,
      value: '',
    },
    subtype: {
      isActive: true,
      value: '',
    },
    slots: {
      isActive: true,
      value: '',
    },
    mtType: {
      isActive: true,
      value: 'Standard',
    },
    shipType: {
      isActive: true,
      value: 'Fighter',
    },
    isCrashed: {
      isActive: true,
      value: false,
    },
  }),

  getters: {
    isValidGlyphs: (state) => /(?:[0-9A-F]{4})F(?:[89A])55(?:[5-7])C(?:[23])(?:[01F])/.test(state.glyphs.value), // tests if an address is valid for EisHub
    isValidDiscoverer: (state) => (Boolean(state.discoverer.value || state.discovererReddit.value)),
    isValidCoords: (state) => (/^[+-](?:[0-9]{1,3})\.(?:[0-9]{2}), [+-](?:[0-9]{1,3})\.(?:[0-9]{2})$/.test(state.coordinates.value) || !state.coordinates.value),
    isValidDepth: (state) => (!isNaN(parseFloat(state.depth.value)) || !state.depth.value),
    isValidSize: (state) => (!isNaN(parseFloat(state.size.value)) || !state.size.value),

    starship: (state) => albumEntry(state.compressedFile?.name ?? '', state.name.value, starshipOther(state.shipType.value, state.coordinates.value, state.locationName.value, state.economy.value, state.isCrashed.value, state.tier.value), state.glyphs.value, discovererParm(state.discovererReddit.value, state.discoverer.value)),
    freighter: (state) => albumEntry(state.compressedFile?.name ?? '', state.name.value, `<br>${state.economy.value} - ${state.systemFaction.value}`, state.glyphs.value, discovererParm(state.discovererReddit.value, state.discoverer.value)),
    frigate: (state) => albumEntry(state.compressedFile?.name ?? '', state.name.value, state.tier.value, state.glyphs.value, discovererParm(state.discovererReddit.value, state.discoverer.value)),
    multitool: (state) => albumEntry(state.compressedFile?.name ?? '', state.name.value, `<br>{{class|${state.tier.value}}} - ${(['Experimental', 'Standard', 'Alien']).includes(state.mtType.value) ? state.subtype.value + ' - ' : ''}${state.slots.value} Slots`, state.glyphs.value, discovererParm(state.discovererReddit.value, state.discoverer.value), addInfoMt(state.coordinates.value, state.saveReloadLocationName.value, state.locationName.value, state.saveReloadLocationType.value, state.locationType.value)),
    creature: (state) => albumEntry(state.compressedFile?.name ?? '', state.name.value, `(${state.size.value}m)`, state.glyphs.value, discovererParm(state.discovererReddit.value, state.discoverer.value)),
    sandworm: (state) => albumEntry(state.compressedFile?.name ?? '', state.name.value, `(${state.depth.value}ku)<br>Stomach: ${state.stomach.value}`, state.glyphs.value, discovererParm(state.discovererReddit.value, state.discoverer.value)),
    flora: (state) => albumEntry(state.compressedFile?.name ?? '', state.name.value, undefined, state.glyphs.value, discovererParm(state.discovererReddit.value, state.discoverer.value)),
    planet: (state) => albumEntry(state.compressedFile?.name ?? '', state.name.value, state.features.value, state.glyphs.value, discovererParm(state.discovererReddit.value, state.discoverer.value)),
  }
});
