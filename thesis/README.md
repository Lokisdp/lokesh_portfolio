# Optimization and Validation Radar-based Egomotion Estimation

**Author:** Lokesh Reddy Sodanapalli  
**Programme:** M.Sc. Embedded Systems, TU Chemnitz  
**Host:** Professorship of Communications Engineering  
**Status:** Defence pending — summary only

## Summary

This master's thesis investigates radar-based estimation of a vehicle's own motion, with a focus on speed and rotational motion. The work combines radar point-cloud processing, Doppler-based speed estimation, filtering and point-cloud registration, and evaluates estimates against reference motion in controlled scenarios.

A MATLAB synthetic validation setup uses Scenario Designer and radarDataGenerator to generate radar observations and ground-truth motion. Straight-driving and turning scenarios provide a basis for examining estimation error and behaviour under different motion conditions. Python/PyTest is also used for test cases in the thesis work.

## Technical scope

- Radar data acquisition and point-cloud preprocessing.
- Doppler-based processing of static radar returns for speed estimation.
- Kalman filtering with speed and acceleration states.
- Generalized Iterative Closest Point (GICP) registration for rotational-motion estimation.
- Comparison of estimated speed and yaw rate with ground truth.
- Error analysis using root mean square error (RMSE).

**Tools:** MATLAB, radar simulation tools, Python and PyTest.

## Validation plan

The synthetic plan includes straight motion at 10 m/s and turning motion at 10 m/s with a yaw rate of 5 degrees/s. Planned acceptance targets are speed RMSE at or below 1.0 m/s and yaw-rate RMSE at or below 3.0 degrees/s. These are validation targets, not claims of achieved results.

## After the defence

This folder will be expanded with the final technical summary, confirmed results and project files suitable for release after the defence. Intended additions include implementation code, reproducible scenario configuration, test instructions, representative plots and documentation of limitations.

The thesis report, datasets and implementation files are not included in this initial summary.
