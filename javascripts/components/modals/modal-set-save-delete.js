"use strict";

Vue.component("modal-set-save-delete", {
  props: {
    modalConfig: Object
  },
  methods: {
    handleNoClick() {
      this.emitClose();
    },
    handleYesClick() {
      player.reality.glyphs.sets[this.modalConfig.glyphSetId] = [];
      EventHub.dispatch(GAME_EVENT.GLYPH_SET_SAVE_CHANGE);
      this.emitClose();
    },
  },
  template: `
    <div class="c-modal-message l-modal-content--centered">
      <h2>Delete this Glyph Set</h2>
      <div class="c-modal-message__text">
        Please confirm your desire to delete this Glyph Set.
        This is permanent and irreversible.
      </div>
      <div class="l-options-grid__row">
        <primary-button
          class="o-primary-btn--width-medium c-modal-message__okay-btn"
          @click="handleNoClick"
        >
          Cancel
        </primary-button>
        <primary-button
          class="o-primary-btn--width-medium c-modal-message__okay-btn c-modal__confirm-btn"
          @click="handleYesClick"
        >
          Delete
        </primary-button>
      </div>
    </div>`
});
