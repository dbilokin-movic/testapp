import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Event.module.css";

export function Event({
  as: _Component = _Builtin.Block,
  artistName = "The Streamers",
  eventGridImage = "https://uploads-ssl.webflow.com/65f080993bcf3b0164216f18/65f080af21f74e4cd681b81e_pinkfloyd.jpg",
}) {
  return (
    <_Component className={_utils.cx(_styles, "event-block")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "event-grid-image")}
        id={_utils.cx(
          _styles,
          "w-node-_5b2234c3-2dee-cb66-0443-c3f067c15028-67c15027"
        )}
        width="auto"
        height="auto"
        loading="auto"
        alt=""
        src={eventGridImage}
      />
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "h3",
          "white-text-2",
          "margin-left-20px",
          "margin-bottom-0px"
        )}
        id={_utils.cx(
          _styles,
          "w-node-_5b2234c3-2dee-cb66-0443-c3f067c15029-67c15027"
        )}
        tag="div"
      >
        {artistName}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cj(
          _utils.cx(_styles, "event-stars-wrapper", "margin-left-20px"),
          "w-clearfix"
        )}
        id={_utils.cx(
          _styles,
          "w-node-_5b2234c3-2dee-cb66-0443-c3f067c1502b-67c15027"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cj(_utils.cx(_styles, "left-float"), "w-clearfix")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "small-star")}
            value="%3Cpicture%3E%0A%3Cimg%20src%3D%22https%3A%2F%2Fres.cloudinary.com%2Fbs-producties-bv%2Fimage%2Fupload%2Fv1699631122%2Ftts-v3%2Fwebflow-assets%2Fartist-page%2Fstar-white.svg%22%20loading%3D%22eager%22%3E%0A%3C%2Fpicture%3E"
          />
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "small-star")}
            value="%3Cpicture%3E%0A%3Cimg%20src%3D%22https%3A%2F%2Fres.cloudinary.com%2Fbs-producties-bv%2Fimage%2Fupload%2Fv1699631122%2Ftts-v3%2Fwebflow-assets%2Fartist-page%2Fstar-white.svg%22%20loading%3D%22eager%22%3E%0A%3C%2Fpicture%3E"
          />
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "small-star")}
            value="%3Cpicture%3E%0A%3Cimg%20src%3D%22https%3A%2F%2Fres.cloudinary.com%2Fbs-producties-bv%2Fimage%2Fupload%2Fv1699631122%2Ftts-v3%2Fwebflow-assets%2Fartist-page%2Fstar-white.svg%22%20loading%3D%22eager%22%3E%0A%3C%2Fpicture%3E"
          />
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "small-star")}
            value="%3Cpicture%3E%0A%3Cimg%20src%3D%22https%3A%2F%2Fres.cloudinary.com%2Fbs-producties-bv%2Fimage%2Fupload%2Fv1699631332%2Ftts-v3%2Fwebflow-assets%2Fartist-page%2Fhalf-star-white.svg%22%20loading%3D%22eager%22%3E%0A%3C%2Fpicture%3E"
          />
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "small-star")}
            value="%3Cpicture%3E%0A%3Cimg%20src%3D%22https%3A%2F%2Fres.cloudinary.com%2Fbs-producties-bv%2Fimage%2Fupload%2Fv1699631356%2Ftts-v3%2Fwebflow-assets%2Fartist-page%2Fempty-star-white.svg%22%20loading%3D%22eager%22%3E%0A%3C%2Fpicture%3E"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "reviews-number-text")}
          tag="div"
        >
          <_Builtin.Strong
            className={_utils.cx(_styles, "similar-events-review-number")}
          >
            {"100+"}
          </_Builtin.Strong>
          {" reviews"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "event-button-grid-container",
          "margin-top-5px"
        )}
        id={_utils.cx(
          _styles,
          "w-node-_5b2234c3-2dee-cb66-0443-c3f067c15036-67c15027"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "event-ticket-button-container",
            "remove-absolute"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cj(
              _utils.cx(_styles, "button-content"),
              "w-clearfix"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "home-ticket-icon")}
              id={_utils.cx(
                _styles,
                "w-node-_5b2234c3-2dee-cb66-0443-c3f067c15039-67c15027"
              )}
              tag="div"
            >
              {""}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "home-ticket-text")}
              id={_utils.cx(
                _styles,
                "w-node-_5b2234c3-2dee-cb66-0443-c3f067c1503b-67c15027"
              )}
              tag="div"
            >
              {"Koop Tickets"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "gradient")}
        id={_utils.cx(
          _styles,
          "w-node-_5b2234c3-2dee-cb66-0443-c3f067c1503d-67c15027"
        )}
        tag="div"
      />
    </_Component>
  );
}
