import React, { useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";


const DCandidates = (props) => {
    useEffect(() => {
        props.fetchAllDCandidates()
    },[])

    return (<div>from Dcandidates</div>)
}

const mapStateToProps = state => ({
        dCondidateList : state.dCandidate.list
})

const mapActionToProps = {
    fetchAllDCandidates: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps) (DCandidates);