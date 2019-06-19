// Main page fro displaying a list of all classes
import React, { useEffect } from  "react";
import { connect } from  "react-redux";

import styled from "styled-components";

import history from "history.js";

import DeleteModal from "../../../../UI/Modals/deleteModal";
import AddClassModal from "../../../../UI/Modals/addModal";
import { getClassList, deleteClass, addClass } from "../../../../../store/actions/classesActions";

import { withStyles } from "@material-ui/core/styles";
import { ListItem,
         ListItemText,
         Typography,
         Fab,
         TextField,
         InputAdornment
        } from "@material-ui/core/";
import { ListStyles } from "./styles.js";
// import { Typography } from "@material-ui/core/";

function  Overview(props) {
    useEffect(() => {
        props.getClassList()
    }, [getClassList]);

    console.log(props)
    return (
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end" }}>
            {props.getFiltered(props.classList).map(
                ({ id, class_name, subject, grade_level, number_of_students, teacher_name }) => {
                    console.log(id)
                    return (
                        <ListStyles key={id} component="li" className={props.classList.listItem}>
                         
                            <Typography key={id}>
                                <div 
                                style={{ cursor: "pointer" }}
                                // onClick={() => history.push(`home/classes/${id}`)}
                                >
                                    <Typography variant="subtitle1" style={{ display:"flex", justifyContent:"space-between" }}>
                                        {class_name}
                                    <DeleteModal 
                                        deleteType="classes"
                                        classId={id}
                                        className={`material-icons ${props.classList.icons}`}
                                        // onClick={e => removeClass(id)}
                                        style={{ zIndex: "1000" }}
                                        // removeClass={removeClass}
                                    />
                                    </Typography>
                                    <div onClick={() => history.push(`home/classes/${id}`)}>
                                        
                                        <hr />
                                        <Typography variant="overline">
                                            {`Subject: ${subject}`}
                                        </Typography>
                                        <Typography variant="overline">
                                            {`Grade Level: ${grade_level}`}
                                        </Typography>
                                        <Typography variant="overline">
                                            {`Teacher Name: ${teacher_name}`}
                                        </Typography>
                                        <Typography variant="overline">
                                            {`Number Of Students: ${number_of_students}`}
                                        </Typography>
                                    </div>

                                </div>
                            </Typography>
                        </ListStyles>
                    )
                 } 
            )}
            <AddClassModal 
            className={`material-icons ${props.classList.icons}`}
            
            />
                                    {/* <Fab
                                        // data-tour={tour ? tour[1] : ""}
                                        size="small"
                                        aria-label="Add"
                                        // className={classes.fab}
                                        onClick={() => add()}
                                    >
                                        <i className="material-icons">add</i>
                                    </Fab> */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
      classList: state.classesReducer.classList
    }
};

export default connect(
    mapStateToProps,
    { getClassList, deleteClass, addClass }
)(Overview);
