import { Button, Typography, Grid, Link } from "@mui/material";

import React from "react";

const Footer = () => {
    return (
        <div>
            <Grid
                className="bg-black text-white text-center mt-10 "
                container
                sx={{
                    bgcolor: "black",
                    color: "white",
                    py: 3,
                }}
            >
                {/* ------------------------------Grid 1st----------------------- */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5 "><span className="text-[1.3rem] font-bold">Company</span></Typography>
                    <div>
                        <Button className="pb-5 t"  variant="h3">
                            About
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">
                            Blog
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">
                            Press
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">
                            Jobs
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">
                            Partners
                        </Button>
                    </div>
                </Grid>

                {/* ------------------------------Grid 2nd----------------------- */}
                <Grid item xs={12} sm={6} md={3}>
                <Typography className="pb-5 "><span className="text-[1.3rem] font-bold">Solutions</span></Typography>
                    <div>
                        <Button className="pb-5" variant="h6">
                            Marketing
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">
                            Analytics
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">
                            Commerce
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">
                            Insigts
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">
                            Support
                        </Button>
                    </div>
                </Grid>

                {/* ------------------------------Grid 3rd----------------------- */}
                <Grid item xs={12} sm={6} md={3}>
                <Typography className="pb-5 "><span className="text-[1.3rem] font-bold">Documentation</span></Typography>
                    <div>
                        <Button className="pb-5" variant="h6">
                            Guides
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">
                            API Status
                        </Button>
                    </div>
                </Grid>

                {/* ------------------------------Grid 4th----------------------- */}
                <Grid item xs={12} sm={6} md={3}>
                <Typography className="pb-5 "><span className="text-[1.3rem] font-bold">Legal</span></Typography>
                    <div>
                        <Button className="pb-5" variant="h6">
                            Claim
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">
                            Privacy
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">
                            Terms
                        </Button>
                    </div>
                </Grid>
                <Grid className="pt-20" item xs={12}>
                    <Typography variant="body2" component="p" align="center">
                         &copy; 2023 My Company. All rights reserved.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Made with love by Me.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Icons made by{' '}
                        <Link
                            href="https://www.freepik.com"
                            color="inherit"
                            underline="always"
                        >
                            Freepik
                        </Link>
                        {' '}from{' '}
                        <Link
                            href="https://www.flaticon.com/"
                            color="inherit"
                            underline="always"
                        >
                            www.flaticon.com
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
